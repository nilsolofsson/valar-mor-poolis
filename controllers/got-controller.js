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
}

module.exports = GameOfThrones;
