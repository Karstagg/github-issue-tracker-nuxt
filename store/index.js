export const state = () => ({
  issues: []
})

export const mutations = {
  addIssues (state, newIssues) {
    state.issues.push(newIssues)
  }
}
