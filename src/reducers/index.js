import { createAction, createReducer } from "@reduxjs/toolkit"

const initialState = {
    distance: null,
    pathCoordinates: []
}

export const chooseRoute = createAction("CHOOSE_PATH")

const routeReducer = createReducer(initialState, builder => builder
    .addCase(chooseRoute, (state, action) => {
        if (action.payload.coordinates) {
            state.pathCoordinates = action.payload.coordinates;
            state.distance = action.payload.distance
        }
    })
)

export default routeReducer