import React from 'react';

const RiskDisclaimer = () => (
    <div>
        <h2>{it.L('Risk Disclosure Statement')}</h2>
        <p>{it.L('This Risk Disclosure Statement is not exhaustive and is not intended to constitute a comprehensive statement of all the risks to which you might be exposed to and does not describe all risks inherent to forex and contracts for differences that exist now or which may arise in the future. Its objective is rather to provide you with information for you to reasonably understand the risks associated with forex and contracts for differences offered by [_1] in our interest to provide you with the best possible trading experience.', it.brand_name)}</p>

        <h2>{it.L('Forex and contracts for differences are high risk and speculative')}</h2>
        <p>{it.L('Forex and contract for differences transactions involve a high degree of risk and are speculative because they allow you to speculate on the short term movements of the price of the underlying financial instruments. You should not enter into forex and/or contracts for differences transactions unless you are able to sustain losses that exceed your deposited funds. It is important for you to understand that in order to realise any value from your open positions, you would have to enter into a corresponding transaction to close your open positions and you may find it difficult or impossible to do so under certain market conditions.')}</p>

        <h2>{it.L('Execution model and counterparty risk')}</h2>
        <p>{it.L('[_1] offers forex and contracts for differences via the hybrid model, i.e., both dealing on own account (dealing desk) and partially hedging client orders with our liquidity providers (no-dealing desk). Client orders are typically hedged when the total transaction volume exceeds a predefined threshold of risk tolerance level. For both execution models, [_1] acts as the contractual counterparty to the transactions that you enter into with us, as opposed to entering into a contractual counterparty with a central clearing house as would be the case with exchange traded financial instruments. As such, counterparty risk exists. Counterparty risk refers to the risk of loss for clients resulting from the fact that the counterparty to the forex and/or contracts for differences transaction that you entered into may default on its obligations prior to the final settlement of the transaction\'s cash flow.', it.brand_name)}</p>

        <h2>{it.L('Leverage')}</h2>
        <p>{it.L('Leverage, in the context of margin trading, refers to the use of margin to increase/amplify the value of a trade. Leverage is expressed as a ratio. A 50:1 leverage, for example, means that you would be able to enter into a trade position that is of 50 times higher than your margin. When you invest in a leveraged product, your profit or loss is based on the leveraged position, i.e., the increased/amplified value of your trade determined based on the leverage ratio you set for your account.')}</p>
        <p>{it.L('Leverage can be used to generate returns that are of multiple times higher than the amount set aside from your account balance to open and maintain a transaction (your margin). However, investments that have the potential to deliver greater investment returns carry higher levels of risk. This means that if the price movement is against your favour, you will suffer losses that are of multiple times higher than the amount set aside from your account balance to open and maintain a transaction (your margin).')}</p>

        <h2>{it.L('Relationship between Margin and Leverage')}</h2>
        <p>{it.L('The leverage ratio refers to the number of times your margin (the amount set aside from your account balance to open and maintain a transaction) can be \'leveraged\' to enter into a Transaction. The denominator of the leverage ratio is always 1. A 50:1 leverage is equivalent to a 2% margin requirement (1 divided by 50 = 2%). The leverage ratio that we/you establish will determine the amount of margin required. As leverage is inversely proportional to margin, the lower the leverage you set for your Account, the higher the margin required to be set aside from your account balance (your margin requirement).')}</p>

        <h2>{it.L('Risk of Stop Order')}</h2>
        <p>{it.L('The system fills orders on a first-in-first out basis, i.e. based on the sequence of the order received, and this is beyond our control. As a result, you may find it difficult or impossible to close a position at the intended price stipulated in your Stop Order during certain market conditions. The placement of Stop Order by you, though useful as a risk management tool, will not necessarily limit your losses to your intended amounts, in the event of highly volatile trading conditions, since market conditions may make it impossible to execute such orders and there is uncertainty about your possible exit price. In short, a Stop Order is not guaranteed because it cannot operate whatever the market circumstances are.')}</p>

        <h2>{it.L('Regular monitoring of open positions')}</h2>
        <p>{it.L('Trading forex and contracts for differences carries a high level of risk and [_1] does not monitor the open positions of your account on your behalf. It is your responsibility to monitor your Open Positions and understand the exposure of your Open Positions whilst ensuring that your exposure commensurate with your risk appetite. Due to the cost associated with overnight open positions, you should consider investing in the market of the instrument in which you ordinarily transact in instead of investing in a CFD.', it.brand_name)}</p>

        <h2>{it.L('Risk of slippage')}</h2>
        <p>{it.L('Whilst we endeavour to open or close the Transaction to which your orders relate at the requested price, acting in accordance with our duty of best execution, there are times when, due to an increase in volatility or volume, orders may be subject to slippage. The difference between the order price and execution price when orders are filled is known as slippage. This means that your order is not filled at the exact intended quoted price when you placed your order. Slippage is usually seen during periods of extremely high or low volatility and generally occurs during fundamental news releases or periods of limited liquidity. Slippages can result in either a positive slippage (more favourable to you) or a negative slippage (less favourable to you).')}</p>

        <h2>{it.L('External forces')}</h2>
        <p>{it.L('Your forex and contracts for differences transactions with [_1] are linked to an underlying financial instrument and you will be exposed to price, currency exchange, interest rate or other volatility of the market to which your financial instrument is related to, especially if the market is of a jurisdiction that is foreign to you. Forex and contracts for differences trading over the internet via an electronic trading platform is subject to data latency risk which may result in delays in order execution.', it.brand_name)}</p>
    </div>

);

export default RiskDisclaimer;
