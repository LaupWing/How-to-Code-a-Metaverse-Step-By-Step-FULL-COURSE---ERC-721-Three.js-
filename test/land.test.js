const Land = artifacts.require('./Land')

require('chai')
   .use(require('chai-as-promised'))
   .should()

contract('Land', ()=>{
   const NAME = "Dapp U Buildings"
   const SYMBOL = "DUB"
   const COST = web3.utils.toWei('1', 'ether')

   let land, result

   beforeEach(async ()=>{
      land = await   Land.new(NAME, SYMBOL, COST)
   })

   describe('Deployment', ()=>{
      it('returns the contract name', async ()=>{
         result = await land.name()
         result.should.equal(NAME)
      })
      it('returns the symbol', async ()=>{
         result = await land.symbol()
         result.should.equal(SYMBOL)
      })
      it('returns the cost to mint', async ()=>{
         result = await land.cost()
         result.toString().should.equal(COST)
      })
      it('returns the max supply', async ()=>{
         result = await land.maxSupply()
         result.toString().should.equal('5')
      })
      it('returns the contract name', async ()=>{
         result = await land.getBuildings()
         result.should.equal(5)
      })
   })

   describe('Minting', ()=>{
      describe('Success', ()=>{
         land.mint(1, {owner1, value: })
      })
   })
})