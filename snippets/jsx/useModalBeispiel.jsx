const [showModal, hideModal] = useModal(
    () => (
      <CreateDashboardModal
        setTitle={setTitle}
        setDescription={setDescription}
        cancel={hideModal}
        submit={submit}
      />
    ),
    [title, description]
  )