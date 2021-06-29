using System;
using System.Collections.Generic;
using System.Text;

namespace TodoList.Infra.Queries
{
    public class UsuariosQueries
    {
        public const string BUSCARPOREMAILESENHA = @"
            SELECT 
                `tbusuarios`.`PkIdUser`,
                `tbusuarios`.`Nome`,
                `tbusuarios`.`Datanasc`,
                `tbusuarios`.`Email`,
                `tbusuarios`.`Senha`
            FROM 
                `todolist`.`tbusuarios`
            WHERE
                `tbusuarios`.`Email` = @email
            and
                `tbusuarios`.`Senha` = @senha;
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
