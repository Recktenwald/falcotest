module HelloWorld.Program

open Microsoft.AspNetCore.Builder
open Falco
open Falco.Markup
open Falco.Routing
open Falco.HostBuilder


/// GET /
let handlePlainText : HttpHandler =
    Response.ofPlainText "Hello world"

/// GET /json
let handleJson : HttpHandler =
    let message = {| Message = "Hello from /json" |}
    Response.ofJson message

/// GET /html
let handleHtml : HttpHandler =
    let html =
        Templates.html5 "en"
            [ Elem.link [ Attr.href "style.css"; Attr.rel "stylesheet" ] ]
            [ Elem.h1 [] [ Text.raw "Hello from /html" ] ]

    Response.ofHtml html

/// GET /greet/{name}
let handleGreet : HttpHandler = fun ctx ->
    let route = Request.getRoute ctx
    let greeting = sprintf "Hello %s" (route.Get "name" "unkown user")
    Response.ofPlainText greeting ctx

let use_default_files conf = 
    let configureDefaultFiles (app : IApplicationBuilder) =
        app.UseDefaultFiles()

    { conf with Middleware = conf.Middleware >> configureDefaultFiles }

type HostBuilder with 
    [<CustomOperation("use_default_files")>]
    member _.UseDefaultFiles (conf : HostConfig, ?config : DefaultFilesOptions) =
        let configureDefaultFiles (app : IApplicationBuilder) =
            match config with
            | Some x -> app.UseDefaultFiles(x)
            | None   -> app.UseDefaultFiles()

        { conf with Middleware = conf.Middleware >> configureDefaultFiles }

[<EntryPoint>]
let main args =
    webHost args {
        use_default_files
        use_static_files
        endpoints [
            get "/" handlePlainText
            get "/json" handleJson
            get "/html" handleHtml
            get "/greet/{name}" handleGreet
        ]
    }

    0 // Exit code

