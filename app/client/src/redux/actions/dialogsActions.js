import { dialogsAPI } from "../../utils/api";

const actions = {
    setDialogs: (items) => ({
        type: "DIALOGS:SET_ITEMS",
        payload: items,
    }),

    setCurrentDialogId: (id) => ({
        type: "DIALOGS:SET_CURRENT_DIALOG_ID",
        payload: id,
    }),
    fetchDialogs: () => (dispatch) => {
        dialogsAPI.getAll().then(({ data }) => {
            dispatch(actions.setDialogs(data));
        });
    },
};
export default actions;

// const actions = {
//     setDialogs: (items) => ({
//         type: "DIALOGS:SET_ITEMS",
//         payload: items,
//     }),

//     fetchDialogs: (url) => (dispatch) => {
//         //FIXME: CONSOLE LOG ===========>
//         console.log(url);
//         fetch(url)
//             .then((response) => {
//                 if (!response.ok) {
//                     throw new Error(response.statusText);
//                 }
//                 return response;
//             })
//             .then(({ data }) => {
//                 //FIXME: CONSOLE LOG ===========>
//                 console.log(data);

//                 //NOTE/: Выполняем dispatch для вызова action setDialogs и передачи в н его data
//                 dispatch(actions.setDialogs(data));
//             });
//     },
// };

// export default actions;
