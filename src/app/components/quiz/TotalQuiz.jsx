import { useSelector } from '../../lib/redux/store'
import {
  selectQuizSlug,
  selectQuizTotal,
} from '../../lib/redux/slices/quizSlice'

const TotalQuiz = () => {
  const quizCurrent = useSelector(selectQuizSlug)
  const quizTotal = useSelector(selectQuizTotal)

  return (
    <div className="flex right-0 absolute gap-1 text-[16px] text-dark">
      <span>{!quizCurrent ? 0 : quizCurrent}</span>
      <span>/</span>
      <span>{!quizTotal ? 0 : quizTotal}</span>
    </div>
  )
}

export default TotalQuiz
