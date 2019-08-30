function handleAddThemClicked() {
    spanWrite('sum',
        simpleAdd(
            byId('addend1').value,
            byId('addend2').value
            )
    )
}