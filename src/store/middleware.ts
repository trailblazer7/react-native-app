export const asyncMiddleware = state => action => next => {
    console.log('ASYNC MIDDLE START: ', state)


    console.log('ASYNC MIDDLE END: ', state)

    next(action)
}