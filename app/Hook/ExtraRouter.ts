import { useMemo } from "react"

export const ExtraRouter = () => {
    const router = useMemo(
        () => [
            {
                label: '전체보기',
                onclick: () => console.log("전체보기")
            }
        ],
        []
    )
    return router
}