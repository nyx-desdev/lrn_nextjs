"use client"

import { useParams } from "next/navigation"

export function Example() {
    const params = useParams()
    return <h1>Examples {params.id}</h1>
}