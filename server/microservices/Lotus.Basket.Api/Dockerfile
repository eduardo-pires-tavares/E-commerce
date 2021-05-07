FROM mcr.microsoft.com/dotnet/aspnet:5.0 AS base
WORKDIR /app
EXPOSE 80

ENV ASPNETCORE_URLS=http://+:80

FROM mcr.microsoft.com/dotnet/sdk:5.0 AS build
WORKDIR /src
COPY ["microservices/Lotus.Basket.Api/Lotus.Basket.Api.csproj", "microservices/Lotus.Basket.Api/"]
RUN dotnet restore "microservices/Lotus.Basket.Api/Lotus.Basket.Api.csproj"
COPY . .
WORKDIR "/src/microservices/Lotus.Basket.Api"
RUN dotnet build "Lotus.Basket.Api.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "Lotus.Basket.Api.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Lotus.Basket.Api.dll"]
