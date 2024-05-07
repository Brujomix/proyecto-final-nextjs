import { useRouter } from "next/navigation"

export function navigarHacia(path) {
    const router = useRouter()
    router.push(path)
}