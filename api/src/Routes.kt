package xyz.d1snin

import com.google.gson.JsonParser
import io.ktor.application.*
import io.ktor.features.*
import io.ktor.gson.*
import io.ktor.html.*
import io.ktor.http.*
import io.ktor.response.*
import io.ktor.routing.*
import kotlinx.html.body
import kotlinx.html.img
import xyz.d1snin.model.Content
import java.io.File
import java.io.FileReader
import java.text.DateFormat

private const val ENDPOINT = "/api"

private lateinit var webUrl: String

private val path = "${System.getProperty("user.dir")}/media"

private val random
    get() = File(path).listFiles()!!.filter {
        !it.isDirectory && checkFormat(
            it.name,
            ".apng",
            ".avif",
            ".gif",
            ".jpg",
            ".jpeg",
            ".jfif",
            ".pjpeg",
            ".pjp",
            ".png",
            ".svg",
            ".webp"
        )
    }.random().name

fun Application.main() {
    webUrl =
        JsonParser
            .parseReader(
                FileReader(
                    File(
                        "api/resources/media_config.json"
                    )
                )
            )
            .asJsonObject["web_url"].asString

    install(DefaultHeaders)
    install(CallLogging)

    install(ContentNegotiation) {
        gson {
            setDateFormat(DateFormat.LONG)
        }
    }

    routing {
        get("$ENDPOINT/random") {
            val source = webUrl.format(random)
            val jsonParam = call.request.queryParameters["json"]

            if (jsonParam != null && jsonParam == "true") {
                call.respond(status = HttpStatusCode.OK, Content(source))

            } else {

                call.respondHtml(status = HttpStatusCode.OK) {
                    body {
                        img {
                            src = source
                        }
                    }
                }
            }
        }
    }
}

private fun checkFormat(fileName: String, vararg formats: String): Boolean {
    formats.forEach {
        if (fileName.endsWith(it)) {
            return true
        }
    }
    return false
}