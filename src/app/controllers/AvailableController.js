class AvailableController {
  async index(req, res) {
    return res.json({ ok: true });
  }
}

export default new AvailableController();
