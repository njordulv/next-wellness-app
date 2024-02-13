import { useSelector } from '@/store/store'
import { selectQuizCurrent, selectQuizTotal } from '@/store/slices/stepSlice'

const StepProgress: React.FC = () => {
  const current = useSelector(selectQuizCurrent)
  const total = useSelector(selectQuizTotal)
  const progress = Math.min((current / total) * 100, 100).toFixed()

  return (
    <div className="absolute left-0 right-0 bottom-[-13px] h-[3px] rounded-[2px] bg-dark">
      <div
        className="gradient2 absolute left-0 top-0 h-[3px] rounded-[2px] trans"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  )
}

export default StepProgress
