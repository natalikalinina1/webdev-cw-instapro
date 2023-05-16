import { renderHeaderComponent } from "./header-component.js";

export function renderAddPostPageComponent({ appEl, onAddPostClick }) {
  const render = () => {
    // Страница добавления поста
    const appHtml = `
    <div class="page-container">
      <div class="header-container"></div>
  <div class="form">
        <h3 class="form-title"> Публикация поста </h3></div>
        <div class="form-inputs">        
          <button class="button" id="add-button">Добавить фото</button>
          <div class="add-image-post"></div>
          <textarea class="textarea add-post-textarea" rows="4" placeholder="Опишите фотографию:"></textarea>
        </div>
      </div>
    </div>
  `;

    appEl.innerHTML = appHtml;

    document.getElementById("add-button").addEventListener("click", () => {
      onAddPostClick({
        description: appEl.querySelector('.add-post-textarea').value,
        imageUrl: imageUrl ,
      });
    });
  

  renderHeaderComponent({
    element: document.querySelector(".header-container"),
  });
};

  render();
  renderUploadImageComponent({
    element: appEl.querySelector('.add-image-post'),
    onImageUrlChange(newImageUrl) {
      imageUrl = newImageUrl;
    },
  });
}
