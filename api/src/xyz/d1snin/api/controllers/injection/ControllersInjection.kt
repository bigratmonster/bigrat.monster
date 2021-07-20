package xyz.d1snin.api.controllers.injection

import org.koin.dsl.module
import xyz.d1snin.api.controllers.api.RandomController
import xyz.d1snin.api.controllers.internal.RandomControllerImpl

object ControllersInjection {
    val koinBeans = module {
        single<RandomController> { RandomControllerImpl() }
    }
}