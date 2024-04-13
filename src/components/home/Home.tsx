'use client'
import Link from 'next/link'
import 'twin.macro'
import { Icons } from '../icons'
import { Game } from '../game'
import { useEffect, useState } from 'react'
import { getDataMain } from '@/api/requests/getDataMain'
import { Centrifuge } from 'centrifuge'

function Home() {
  /*   useEffect(() => {
    const centrifuge = new Centrifuge(
      'wss://app.ezcash36.casino/connection/websocket',
      {
        token:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIwIiwiaW5mbyI6W119.bw8M6WYc3jrIx8-4T_9bc97TwJ-KpUGf8gHIMJINLZo',
      },
    )
    centrifuge.on('error', function (ctx) {
      console.log(ctx)
    })
    centrifuge.connect()
    centrifuge.on('connected', function () {
      console.log('работает')
    })

    return () => {}
  }, []) */

  useEffect(() => {
    const centrifuge = new Centrifuge(
      'wss://app.ezcash36.casino/connection/websocket',
      {
        token:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIwIiwiaW5mbyI6W119.bw8M6WYc3jrIx8-4T_9bc97TwJ-KpUGf8gHIMJINLZo',
        debug: true,
      },
    )

    const sub = centrifuge.newSubscription('')

    sub.on('publication', function (ctx) {
      console.log(ctx.data)
    })

    sub.subscribe()
    centrifuge.on('error', function (error) {
      console.log(error)
    })
    centrifuge.connect()
  }, [])

  return (
    <div tw="mx-auto max-w-[775px]">
      <Game />
      <h1 tw="text-2xl font-extrabold text-slate-900 sm:text-3xl dark:text-slate-200">
        Classic
      </h1>
      <div className="d"></div>
    </div>
  )
}

export default Home
