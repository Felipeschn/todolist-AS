using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Text;

namespace TodoList.Infra.DataContexts
{
    public class DataContext
    {
        public MySqlConnection Connection { get; }

        public DataContext(string connection)
        {
            Connection = new MySqlConnection(connection);
            Connection.Open();
        }

        public void Dispose() => Connection.Dispose();
    }
}
