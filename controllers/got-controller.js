/* eslint-disable no-eq-null */
class GameOfThrones {
    constructor(config) {
        this.Data = new (require('../data/google.sheets'))(config.sheets);
        this.characters = config.characters;

        this.cache = {};
        this.cacheTTL = config.cacheTTL;
    }

    fetchFromCache(object) {
        // eslint-disable-next-line eqeqeq
        if (this.cache[object] != null && this.cache[object].cachedTime+this.cacheTTL > Date.now()) {
            return this.cache[object].data;
        }

        return null;
    }

    saveToCache(object, data) {
        this.cache[object] = {
            cachedTime: Date.now(),
            data
        }
    }

    async getCharacterStatuses() {
        let cache = this.fetchFromCache('characters');

        if (cache !== null) {
            return cache;
        }

        let rows = await this.Data.getRows(1, 1, 40);

        let returnArr = [];

        rows.forEach((row) => {
            returnArr.push({
                betsAlive: row.betsalive,
                betsDead: row.betsdead,
                betsWhiteWalker: row.betswhitewalker,
                name: row.character,
                status: row.status

            });
        });

        this.saveToCache('characters', returnArr);

        return returnArr;
    }

    async getUserResponses() {
        let cache = this.fetchFromCache('UserResponses');

        if (cache !== null) {
            return cache;
        }

        let rows = await this.Data.getRows(0, 1, 40);

        this.saveToCache('UserResponses', rows);

        return rows;
    }

    async getScores() {
        let cache = this.fetchFromCache('getScores');

        if (cache !== null) {
            return cache;
        }

        let characters = await this.getCharacterStatuses();
        let players = await this.getUserResponses()
        let returnArr = [];

        players.forEach((player) => {
            returnArr.push(this.calculatePlayerScore(player, characters));
        });

        returnArr.sort((objA, objB) => {
            if (objA.points < objB.points) {
                return 1;
            }

            if (objA.points > objB.points) {
                return -1;
            }

            return 0
        });

        this.saveToCache('getScores', returnArr);

        return returnArr;
    }


    calculatePlayerScore(player, characters) {
        let score = 0;
        let playerBets = [];

        characters.forEach((character) => {
            let characterName = character.name.toLowerCase().replace(/\s/gu, '');
            let characterStatus = character.status.toLowerCase().replace(/!/gu, '');
            let playerBet = player['will' + characterName + 'survive'].toLowerCase();
            let characterBetsArray = {
                lifeBet: playerBet,
                name: character.name,
                whiteWalkerBet: ''
            }

            if (characterStatus === playerBet) {
                score += 1;
            }

            if (characterStatus === 'whitewalker' && playerBet === 'dead') {
                score += 1;
            }

            if (player['will' + characterName + 'becomeawhitewalker'] !== '') {
                let playerBetWhiteWalker = player['will' + characterName + 'becomeawhitewalker'].toLowerCase();

                characterBetsArray.whiteWalkerBet = playerBetWhiteWalker

                if (characterStatus === 'whitewalker' && playerBetWhiteWalker === 'yes') {
                    score +=1;
                }

                if (characterStatus === 'dead' && playerBetWhiteWalker === 'yes') {
                    score -= 1;
                }
            }
            playerBets.push(characterBetsArray)
        });

        return {
            bets: playerBets,
            name: player.whatsyourname,
            points: score
        };
    }

    dynamicSort(property) {
        let sortOrder = 1;

        if (property[0] === '-') {
            sortOrder = -1;
            // eslint-disable-next-line no-param-reassign
            property = property.substr(1);
        }

        return (a, b) => {
            if (sortOrder === -1) {
                return b[property].localeCompare(a[property]);
            }

            return a[property].localeCompare(b[property]);
        }
    }

    async getStatistics() {
        let cache = this.fetchFromCache('getStatistics');

        if (cache !== null) {
            return cache;
        }

        let amountDead = 0,
        amountEpisodes = Number((await this.Data.getCells(1,3,3,13,13))[0].value),
        amountWalkers = 0,
        characters = await this.getCharacterStatuses(),
        totalCharacters = characters.length,
        totalEpisodes = Number((await this.Data.getCells(1,3,3,14,14))[0].value);

        characters.forEach((character) => {
            switch (character.status) {
                case 'Alive!':
                    break;

                case 'Dead!':
                    amountDead++;
                    break;

                default:
                    amountWalkers++;
                    break;
                }
        });

        let returnObj = {
            amountDead,
            amountEpisodes,
            amountWalkers,
            totalCharacters,
            totalEpisodes
        }

        this.saveToCache('getStatistics', returnObj);

        return returnObj
    }
}

module.exports = GameOfThrones;
