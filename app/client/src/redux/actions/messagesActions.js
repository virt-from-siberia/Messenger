import { messagesAPI } from "../../utils/api";

const actions = {
    setMessages: (items) => ({
        type: "MESSAGES:SET_ITEMS",
        payload: items,
    }),
    setIsLoading: (bool) => ({
        type: "MESSAGES:SET_IS_LOADING",
        payload: bool,
    }),
    fetchMessages: (dialogId) => (dispatch) => {
        dispatch(actions.setIsLoading(true));
        messagesAPI
            // .getAllByDialogId("/message?_id=" + dialogId)
            .getAllByDialogId(dialogId)
            .then(({ data }) => {
                dispatch(actions.setMessages(data));
                dispatch(actions.setIsLoading(false));
            })
            .catch(() => {
                dispatch(actions.setIsLoading(false));
            });
    },
};

export default actions;
