export const state = () => ({
  issues: null
})

export const mutations = {

  addIssues (state, newIssues) {
    console.log(state.issues, "isssss")
    if (state.issues === null) {
      state.issues = newIssues
    } else {
     state.issues = state.issues.concat(newIssues)
    }
  }
}
