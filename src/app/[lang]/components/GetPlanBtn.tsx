export default function GetPlanBtn() {
  const handleScrollToPlan = () => {
    const getMyPlan = document.getElementById('getMyPlan')

    if (getMyPlan) {
      getMyPlan.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <button className="button button--small" onClick={handleScrollToPlan}>
      Get My Plan
    </button>
  )
}
