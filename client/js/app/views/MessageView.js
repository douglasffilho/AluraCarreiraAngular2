class MessageView extends View {

    template(model) {
        return model.text.length > 0 ? `<p class="alert alert-info">${model.text}</p>` : ``;
    }

}