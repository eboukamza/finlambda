finlambda
===

[![Travis](https://travis-ci.org/eboukamza/finlambda.svg?branch=master)](https://travis-ci.org/eboukamza/finlambda)
[![Coverage Status](https://coveralls.io/repos/github/eboukamza/finlambda/badge.svg?branch=master)](https://coveralls.io/github/eboukamza/finlambda?branch=master)

Is a JavaScript library for financial calculations designed to be used with functional programing paradigm.

It uses [Ramda](https://ramdajs.com/).


Why finlambda?
---

Build your custom calculator for taxes and compose it easily using ramda.

finlambda allows write your business rules easy to understand, easy to change and without side effects.

Installation
---

    npm install finlambda ramda@0.26.0

Node

Import all functions

    const FinLambda = require('finlambda')

or individually

    const { rateAt } = require('finlambda')

ES2015 or typescript

    import { rateAt } from 'finlambda'

Browser

    <script src="path/to/yourCopyOf/ramda.js></script>
    <script src="path/to/yourCopyOf/finlambda.js></script>

Usage
---

  create a complex tax

    const bracket15 = taxBracket(rateAt(0.15), forInterval(0, 38120))
    const bracket28 = taxBracket(rateAt(0.28), forInterval(38121))
    const brackets = [bracket15, bracket28]
    const corpTax = tax(brackets);
    const afterCorpTax = netAfter(corpTax)
    // calculate your tax
    corpTax(100000)        //=> 23045
    // calculate net amount after tax
    afterCorpTax(100000)   //=> 76955

  chain taxes

    const flatTax = rateAt(0.30)
    const afterFlatTax = netAfter(flatTax)

    const withFlatTax = R.pipe(afterCorpTax, afterFlatTax)

    withFlatTax(100000) //=> 53868.5

  tax value in each bracket

    const coprTaxDetailed = taxDetail(brackets)
    corpTaxDetailed(100000) //=> [ 5718, 11726.12 ]

  calculate net or gross price adding or deducting VAT

    const vat20 = rateAt(0.2)
    const grossAmount = grossOf(vat20, 1000) //=> 1200

    const netAmount = netOf(0.2, 1200) //=> 1000


Read all documentation [here](https://eboukamza.github.io/finlambda-docs/)
