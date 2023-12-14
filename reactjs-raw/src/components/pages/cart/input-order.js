export function InputOrder() {
    return (
        <>
            <div className="input-group">
                <div className="button minus">
                    <button type="button" className="btn btn-primary btn-number" disabled="disabled" data-type="minus" data-field="quant[3]">
                        <i className="ti-minus"></i>
                    </button>
                </div>
                <input type="text" name="quant[3]" className="input-number" data-min="1" data-max="100" defaultValue="3" />
                <div className="button plus">
                    <button type="button" className="btn btn-primary btn-number" data-type="plus" data-field="quant[3]">
                        <i className="ti-plus"></i>
                    </button>
                </div>
            </div>
        </>
    )
}