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
}

module.exports = GameOfThrones;
