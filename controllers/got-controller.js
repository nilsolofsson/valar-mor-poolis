/* eslint-disable no-eq-null */
class GameOfThrones {
    constructor(config) {
        this.Data = new (require('../data/google.sheets'))(config.sheets);
        this.characters = config.characters;

        this.cache = {};
        this.cacheTTL = config.cacheTTL;
    }

    fetchFromCache(object) {
        if (this.cache[object] != null && this.cache[object].cachedTime <= Date.now()+this.cacheTTL) {
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

    async getUserResponseNames() {
        let cache = this.fetchFromCache('UserResponseNames');

        if (cache !== null) {
            return cache;
        }

        let rows = await this.Data.getRows(0, 1, 40);

        let returnArr = [];

        rows.forEach((row) => {
            returnArr.push({
                name: row.whatsyourname,
                points: 0
            })
        });

        this.saveToCache('UserResponseNames', returnArr);

        return returnArr;
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
