'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Vote = use('App/Models/Vote')

/**
 * Resourceful controller for interacting with votes
 */
class VoteController {
  /**
   * Show a list of all votes.
   * GET votes
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index () {
    const votes = Vote.all();

    return votes
  }
  /**
   * Create/save a new vote.
   * POST votes
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, auth }) {
    const data = await request.only(['content'])
    const vote = Vote.create({ user_id: auth.user.id, ...data })

    return vote


  }

  /**
   * Display a single vote.
   * GET votes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */

}

module.exports = VoteController
