/* eslint-disable max-params */
class GoogleSheets {
    constructor(config) {
        // todo: move to config
        this.spreadsheetKey = config.key;
        this.credentials = config.credentials;

        this.sheets = [];

        this.doc = new (require('google-drive-sheets'))(this.spreadsheetKey);
        this.doc.useServiceAccountAuth(this.credentials, (err) => {
            process.stdout.write(err+'\n')

            this.getInfo();
        });
    }

    getInfo() {
        this.doc.getInfo((err, info) => {
            if (err) {
                process.stdout.write(err+'\n');

                return;
            }

            info.worksheets.forEach((sheet) => {
                this.sheets.push(sheet);
            });
        });
    }

    getRows(sheet, offset, limit) {
        return new Promise((resolve, reject) => {
            this.sheets[sheet].getRows({
                limit,
                offset
            },(err, rows) => {
                if (err) {
                    return reject(err);
                }

                return resolve(rows);
            })
        });
    }

    getCells(sheet, minRow, maxRow, minCol, maxCol) {
        return new Promise((resolve, reject) => {
            this.sheets[sheet].getCells({
                'max-col': maxCol,
                'max-row': maxRow,
                'min-col': minCol,
                'min-row': minRow
            },(err, cells) => {
                if (err) {
                    return reject(err);
                }

                return resolve(cells);
            })
        });
    }
}

module.exports = GoogleSheets;
