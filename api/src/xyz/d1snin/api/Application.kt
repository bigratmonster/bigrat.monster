package xyz.d1snin.api

import io.ktor.application.*
import io.ktor.features.*
import io.ktor.gson.*
import io.ktor.http.content.*
import io.ktor.routing.*
import io.ktor.server.netty.*
import org.koin.ktor.ext.Koin
import org.slf4j.event.Level
import xyz.d1snin.api.controllers.injection.ControllersInjection
import xyz.d1snin.api.modules.randomModule

fun main(args: Array<String>): Unit = EngineMain.main(args)

@Suppress("unused") // Referenced in application.conf
fun Application.module() {
    install(ContentNegotiation) {
        gson {
            setPrettyPrinting()
        }
    }

    install(CallLogging) {
        level = Level.DEBUG
    }

    install(Routing) {
        static("/static") {
            files("../media")
        }

        randomModule()
    }

    install(Koin) {
        modules(ControllersInjection.koinBeans)
    }
}