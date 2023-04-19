const PATH = 'PATH'
const TO = 'TO'

const route = {
    [PATH]: '/',
    app: {
        [PATH]: 'app/',
        dashboard: {
            [PATH]: 'dashboard/'
        },
        task: {
            [PATH]: 'task/',
            content001: {
                [PATH]: 'content001/'
            },
            content002: {
                [PATH]: 'content002/'
            },
            content003: {
                [PATH]: 'content003/'
            }
        },
        error: {
            [PATH]: 'error/',
            notFound: {
                [PATH]: 'not-found/'
            }
        }
    }
}

route[TO] = `${route[PATH]}`
route.app[TO] = `${route[TO]}${route.app[PATH]}`

route.app.dashboard[TO] = `${route.app[TO]}${route.app.dashboard[PATH]}`

route.app.task[TO] = `${route.app[TO]}${route.app.task[PATH]}`
route.app.task.content001[TO] = `${route.app.task[TO]}${route.app.task.content001[PATH]}`
route.app.task.content002[TO] = `${route.app.task[TO]}${route.app.task.content002[PATH]}`
route.app.task.content003[TO] = `${route.app.task[TO]}${route.app.task.content003[PATH]}`

route.app.error[TO] = `${route.app[TO]}${route.app.error[PATH]}`
route.app.error.notFound[TO] = `${route.app.error[TO]}${route.app.error.notFound[PATH]}`

export { route }
