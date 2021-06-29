using System;
using System.Collections.Generic;
using System.Text;

namespace TodoList.Infra.Queries
{
    public class UsuariosQueries
    {
        public const string BUSCARPOREMAILESENHA = @"
            SELECT 
                `tbtarefas`.`PkIdUser`,
                `tbtarefas`.`Nome`,
                `tbtarefas`.`Datanasc`,
                `tbtarefas`.`Email`,
                `tbtarefas`.`Senha`
            FROM 
                `todolist`.`tbusuarios`
            WHERE
                `tbtarefas`.`Email` = @email
            and
                `tbtarefas`.`Senha` = @senha;
        ";

        public const string SALVAR = @"
            INSERT INTO `todolist`.`tbusuarios`
                            (`Nome`,
                            `Datanasc`,
                            `Email`,
                            `Senha`)
             VALUES
                            (@Nome,
                            @Datanasc,
                            @Email,
                            @Senha);
        ";
    }
}
