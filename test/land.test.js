const Land = artifacts.require('./Land')

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
         
      })
   })
})