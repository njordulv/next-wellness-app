import { useSelector } from '@/app/[lang]/lib/redux/store'
import {
  selectQuizSlug,
  selectQuizTotal,
} from '@/app/[lang]/lib/redux/slices/quizSlice'

const TotalQuiz: React.FC = () => {
  const quizCurrent = useSelector(selectQuizSlug)
  const quizTotal = useSelector(selectQuizTotal)

  return (
    <div className="flex right-0 absolute gap-1 text-[16px] text-dark">
      <span>{quizCurrent || '0'}</span>
      <span>/</span>
      <span>{quizTotal || 0}</span>
    </div>
  )
}

export default TotalQuiz
