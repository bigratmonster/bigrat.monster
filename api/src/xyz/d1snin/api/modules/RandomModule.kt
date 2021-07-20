package xyz.d1snin.api.modules

import io.ktor.application.*
import io.ktor.html.*
import io.ktor.routing.*
import kotlinx.css.*
import kotlinx.html.*
import org.koin.ktor.ext.inject
import xyz.d1snin.api.controllers.api.RandomController

private val random get() = (0..255).random()

fun Routing.randomModule() {

    val controller by inject<RandomController>()

    get("/random") {
        val rawParam = call.request.queryParameters["raw"].toBoolean()

        call.respondHtml {
            head {
                title {
                    +"Random Image"
                }
            }

            body {
                if (!rawParam) {
                    styling {
                        backgroundColor = rgb(random, random, random)
                        textAlign = TextAlign.center
                    }
                }

                img {
                    src = controller.getRandomImageSource()
                }
            }
        }
    }
}

private fun CommonAttributeGroupFacade.styling(builder: CSSBuilder.() -> Unit) {
    this.style = CSSBuilder().apply(builder).toString().trim()
}
