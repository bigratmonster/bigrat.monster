package xyz.d1snin.api.controllers.internal

import xyz.d1snin.api.controllers.api.RandomController
import java.nio.file.Files
import java.nio.file.Path
import java.nio.file.Paths
import java.util.stream.Collectors

class RandomControllerImpl : RandomController {

    override fun getRandomImageSource(): String {
        return "/static/${
            Files.walk(Paths.get("../media")).filter {
                it.isPicture()
            }.collect(Collectors.toList()).random().toString().replace("../media/", "")
        }"
    }
}

private fun Path.isPicture(): Boolean {
    listOf(
        ".apng",
        ".avif",
        ".gif",
        ".jpeg",
        ".jpg",
        ".jfif",
        ".pjpeg",
        ".pjp",
        ".png",
        ".svg",
        ".webp"
    ).forEach {
        if (this.fileName.toString().endsWith(it, false))
            return true
    }
    return false
}