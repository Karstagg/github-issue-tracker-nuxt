export const state = () => ({
  issues: null,
  triggered: false
})

export const mutations = {

  addIssues (state, newIssues) {
    console.log(state.issues, "isues")
    if (state.issues === null) {
      state.issues = newIssues
    } else {
     state.issues = state.issues.concat(newIssues)
    }
  },
  trigger (state, change) {
    state.trigger = change;
  }
}
