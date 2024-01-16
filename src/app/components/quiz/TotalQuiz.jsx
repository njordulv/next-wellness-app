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
      {quizCurrent !== 0 && (
        <>
          <span>{quizCurrent}</span>
          <span>/</span>
          <span>{quizTotal}</span>
        </>
      )}
    </div>
  )
}

export default TotalQuiz
