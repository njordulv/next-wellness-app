import { useSelector } from '../../lib/redux/store'
import { selectQuizId, selectQuizTotal } from '../../lib/redux/slices/quizSlice'

const TotalQuiz = () => {
  const quizCurrent = useSelector(selectQuizId)
  const quizTotal = useSelector(selectQuizTotal)

  return (
    <div className="flex right-0 absolute">{`${
      quizCurrent + 1
    } / ${quizTotal}`}</div>
  )
}

export default TotalQuiz
