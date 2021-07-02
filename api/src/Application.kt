package xyz.d1snin

import io.ktor.application.*
import io.ktor.server.engine.*
import io.ktor.server.netty.*

fun main() {
    embeddedServer(Netty, port = 8080, module = Application::main).start(wait = true)
}