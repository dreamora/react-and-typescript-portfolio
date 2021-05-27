import {Action} from '../actions'
import {ActionType} from '../action-types'

interface NPMPackageState {
    loading: boolean;
    error: string | null;
    data: string[]
}

const reducer = (state: NPMPackageState,
                 action: Action
): NPMPackageState => {
    switch (action.type) {
        case ActionType.SEARCH_PACKAGES:
            return {loading: true, error: null, data: []};
        case ActionType.SEARCH_PACKAGES_SUCCESS:
            return {loading: false, error: null, data: action.payload};
        case ActionType.SEARCH_PACKAGES_ERROR:
            return {loading: false, error: action.payload, data: []};
        default:
            return state;
    }
};

export default reducer;
