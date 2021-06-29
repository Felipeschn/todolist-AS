using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.OpenApi.Models;
using System;
using TodoList.Domain.Handler;
using TodoList.Domain.Interfaces.Repositorios;
using TodoList.Infra;
using TodoList.Infra.DataContexts;
using TodoList.Infra.Repositorios;

namespace TodoList.Api
{
    public class Startup
    {
        public IConfiguration Configuration { get; }
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public void ConfigureServices(IServiceCollection services)
        {
            #region [+] AppSettings 

            services.Configure<ConnectionStrings>(options => Configuration.GetSection("ConnectionStrings").Bind(options));

            #endregion

            #region [+] DataContexts 
                services.AddTransient<DataContext, DataContext>(provider => new DataContext(Configuration["ConnectionStrings:Connection"]));
            #endregion

            #region [+] Repositories 

            services.AddTransient<ITarefasRepositorio, TarefasRepositorio>();
            services.AddTransient<IUsuariosRepositorio, UsuariosRepositorio>();

            #endregion

            #region [+] Handlers 

            services.AddTransient<TarefasHandler, TarefasHandler>();
            services.AddTransient<UsuariosHandler, UsuariosHandler>();

            #endregion

            #region [+] Allow-Orgin
            services.AddCors();
            #endregion

            #region [+] Swagger

            services.AddSwaggerGen(c =>
            {
                c.DescribeAllParametersInCamelCase();
                c.IncludeXmlComments($@"{AppDomain.CurrentDomain.BaseDirectory}\Swagger.xml");
                c.SwaggerDoc("v1", new OpenApiInfo
                {
                    Version = "v1",
                    Title = "Tarefas.io API",
                    Description = "Tarefas.io",
                    Contact = new OpenApiContact
                    {
                        Name = "Projeto",
                        Url = new Uri("https://localhost:8080/")
                    }
                });
            });
            #endregion
            
            services.AddControllers();
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseSwagger();
            app.UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "TodoList API");
            });

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthorization();

            app.UseCors(x => x.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
