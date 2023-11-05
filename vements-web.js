class RankTable extends HTMLElement {
    constructor() {
        super();
    }

    disconnectedCallback() {
        //
    }

    static get observedAttributes() {
        return []
    }

    attributeChangedCallback(name, oldValue, newValue) {
        //
    }

    adoptedCallback() {
        //
    }
}

customElements.define("achievement-leaderboard",

    class AchievementLeaderboard extends RankTable {
        #response_path = "achievement_leaderboard"
        #default_url = "http://bearer.localtest.me/api/rest/v1.0.3/" // TODO: write via code-gen

        connectedCallback() {
            const achievement_id = this.getAttribute("achievement-id")
            const base_url = this.getAttribute("base-url") || this.#default_url
            const full_url = `${base_url}achievement/${achievement_id}/leaderboard`

            fetch(full_url).then(response => {
                console.info("scoreboard-scores fetch response:", response)
                response.json().then(data => {
                    const head = "<tr><th>Progress</th><th>Iterations</th><th>Name</th></tr>"
                    const foot = "<tr><td colspan='3'></td></tr>"
                    const rows = data[this.#response_path].map((item) => {
                        return `<tr><td>${item.progress}</td><td>${item.iterations}</td><td>${item.participant.display}</td></tr>`
                    })
                    this.innerHTML = `
                    <div class="achievement-leaderboard">
                    <table>
                    ${head}
                    ${rows.join("")}
                    ${foot}
                    </table>
                    </div>
                    `
                })
            }).catch(error => {
                // show error instead
                console.error("scoreboard-scores fetch error:", error)
            });
        }
    }
)


customElements.define("scoreboard-scores",
    class ScoreboardScores extends RankTable {
        #default_url = "http://bearer.localtest.me/api/rest/v1.0.3/" // TODO: write via code-gen
        #response_path = "scoreboard_scores";

        connectedCallback() {
            const scoreboard_id = this.getAttribute("scoreboard-id")
            const base_url = this.getAttribute("base-url") || this.#default_url
            const full_url = `${base_url}scoreboard/${scoreboard_id}/scores`

            fetch(full_url).then(response => {
                console.info("scoreboard-scores fetch response:", response)
                response.json().then(data => {
                    const head = "<tr><th>Rank</th><th>Score</th><th>Name</th></tr>"
                    const foot = "<tr><td colspan='3'></td></tr>"
                    const rows = data[this.#response_path].map((item) => {
                        return `<tr><td>${item.rank}</td><td>${item.total}</td><td>${item.participant.display}</td></tr>`
                    })
                    this.innerHTML = `
                    <div class="scoreboard-scores">                    
                    <table>
                    ${head}
                    ${rows.join("")}
                    ${foot}
                    </table>
                    </div>
                    `
                })
            }).catch(error => {
                // show error instead
                console.error("scoreboard-scores fetch error:", error)
            });
        }
    })
