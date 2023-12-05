const WebsiteDataDB = require("../../lib/WebsiteData/WebsiteDataDB")

const WebsiteData = async (req, res) => {
    const result = await WebsiteDataDB()
    res.send(result)
}
module.exports = WebsiteData