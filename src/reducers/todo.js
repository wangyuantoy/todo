// 单个todo项的reducer
const todo = (state = null, action) =>{
    switch (action.type){
        case "ADD_TODO":
            return {
                id: action.id,
                text: action.text,
                completed: false
            };
        case "TOGGLE_TODO":
            if(state.id !== action.id){
                return state
            }
            return Object.assign({},state, {completed:!state.completed});
        default:
            return state
    }
};
// 整个todo列表的reducer，此时state是包含了所有待办项state的数组
const  todos = (state = [], action) =>{
    switch (action.type){
        case "ADD_TODO":
            return [
                ...state,
                todo(null, action)
            ];
        case "TOGGLE_TODO":
            // 遍历state数组，调用上边的todo方法对completed状态处理
            return state.map(t =>todo(t, action));
        default:
            return state
    }
};
export default todos