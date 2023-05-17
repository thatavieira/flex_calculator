import * as SQLite from 'expo-sqlite';

//criando conexão
export const Database = {
    getConnection: () => {
        const db = SQLite.openDatabase('gerenciador_combustivel.db');

        db.transaction((tx) => {
            tx.executeSql(
                'create table if not exists gastos (id integer primary key not null, tipo int not null, data text not null, preco real not null, valor real not null, odometro real not null);'
            );
        });

        //cria interface para executar 
        const ExecuteQuery = (sql, params = []) =>
            new Promise((resolve, reject) => {
                db.transaction((trans) => {
                    trans.executeSql(
                        sql,
                        params,
                        (trans, results) => {
                            resolve(results);
                        },
                        (error) => {
                            reject(error)
                        }
                    );
                });
            });

        return ExecuteQuery;
    },
};

export default Database;