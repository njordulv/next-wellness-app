import { useSelector } from '@/store/store'
import { selectQuizCurrent, selectQuizTotal } from '@/store/slices/stepSlice'

const TotalQuiz: React.FC = () => {
  const current = useSelector(selectQuizCurrent)
  const total = useSelector(selectQuizTotal)

  return (
    <div className="flex right-0 absolute gap-1 text-[16px] text-dark">
      <span>{current || 0}</span>
      <span>/</span>
      <span>{total || 0}</span>
    </div>
  )
}

export default TotalQuiz
