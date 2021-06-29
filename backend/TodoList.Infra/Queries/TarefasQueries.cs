using System;
using System.Collections.Generic;
using System.Text;

namespace TodoList.Infra.Queries
{
    public class TarefasQueries
    {
        public const string LISTAR = @"
            SELECT 
                `tbtarefas`.`PkCodTarefa`,
                `tbtarefas`.`NomeTarefa`,
                `tbtarefas`.`DataTarefa`,
                `tbtarefas`.`Concluido`,
                `tbtarefas`.`FkIdUser`
            FROM 
                `todolist`.`tbtarefas`;
        ";

        public const string LISTARPORID = @"
            SELECT 
                `tbtarefas`.`PkCodTarefa`,
                `tbtarefas`.`NomeTarefa`,
                `tbtarefas`.`DataTarefa`,
                `tbtarefas`.`Concluido`,
                `tbtarefas`.`FkIdUser`
            FROM 
                `todolist`.`tbtarefas`
            WHERE
                `tbtarefas`.`PkCodTarefa` = @id ;
        ";

        public const string SALVAR = @"
            INSERT INTO `todolist`.`tbtarefas`
                            (`NomeTarefa`,
                            `DataTarefa`,
                            `Concluido`,
                            `FkIdUser`)
             VALUES
                            (@NomeTarefa,
                            @DataTarefa,
                            @Concluido,
                            @FkIdUser);
        ";

        public const string ATUALIZAR = @"
            UPDATE `todolist`.`tbtarefas`
                SET
                    `NomeTarefa` = @NomeTarefa,
                    `DataTarefa` = @DataTarefa,
                    `Concluido` = @Concluido,
                    `FkIdUser` = @FkIdUser
                WHERE `PkCodTarefa` = @PkCodTarefa;
        ";

        public const string DELETAR = @"
            DELETE FROM `todolist`.`tbtarefas`
            WHERE `PkCodTarefa` = @PkCodTarefa;
        ";
    }
}
