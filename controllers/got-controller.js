class GameOfThrones {
    constructor(config) {
        this.Data = new (require('../data/google.sheets'))(config.sheets);
        this.characters = config.characters;
    }

    async getCharacterStatuses() {
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

        return returnArr;
    }

    async getUserResponseNames() {
        let rows = await this.Data.getRows(0, 1, 40);

        let returnArr = [];

        rows.forEach((row) => {
            returnArr.push({
                name: row.whatsyourname,
                points: 0,
            })
        });

        return returnArr;
    }
    
    async getUserResponses() {
        let rows = await this.Data.getRows(0, 1, 40);
        
        return rows;
    }

    async getScores() {
        let characters = await this.getCharacterStatuses();
        let players    = await this.getUserResponses()
        let returnArr  = [];

        players.forEach(player => {
            let score = 0;
            
            characters.forEach(character => {
                let characterName = character.name.toLowerCase().replace(/\s/g, '');
                let characterStatus = character.status.toLowerCase().replace(/!/g, '');
                let playerBet = player['will' + characterName + 'survive'].toLowerCase();
                
                if (characterStatus == playerBet) {
                    score += 1;
                }
                
                if (player['will' + characterName + 'becomeawhitewalker'] != '') {
                    let playerBetWhiteWalker = player['will' + characterName + 'becomeawhitewalker'].toLowerCase();                    
                    if (characterStatus == 'whitewalker' && playerBetWhiteWalker == 'yes') {
                        score +=1;
                    }

                    if (characterStatus == 'dead' && playerBetWhiteWalker == 'yes') {
                        score -= 1;
                    }
                }
            })

            returnArr.push({
                name: player.whatsyourname,
                points: score
            })
        })
        
        return returnArr;
    }
}

module.exports = GameOfThrones;
