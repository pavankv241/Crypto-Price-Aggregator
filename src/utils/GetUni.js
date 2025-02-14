import { ethers } from 'ethers'
import readline from 'readline'

const address = '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D'
const abi = [ 
    'function getAmountsOut(uint amountIn, address[] memory path) external view returns (uint[] memory amounts)',
]

const provider = new ethers.JsonRpcProvider('https://mainnet.infura.io/v3/d375a9a663564dfd81a6951dfe6766ac')

const contract = new ethers.Contract(address, abi, provider)

const path = ['0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2', '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48']

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const main = async () => {
    rl.question('Enter the amount of ETH: ', async (amountInUser) => {
        try {
            const amountIn = ethers.parseEther(amountInUser)
            const amounts = await contract.getAmountsOut(amountIn, path)
            const price = ethers.formatUnits(amounts[1].toString(), 6)
            console.log(`The price of ${amountInUser} ETH is ${price} USDC`)
        } catch (error) {
            console.error('Error:', error.message)
        } finally {
            rl.close()
        }
    })
}

main()

